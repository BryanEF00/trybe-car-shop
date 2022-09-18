import { expect } from 'chai';
import sinon from 'sinon';

import CarModel from "../../../models/Car";
import { Model } from 'mongoose';
import { carMock, carMockForChange, carMockForChangeWithId, carMockWithId } from '../../mocks/carMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findById').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockForChangeWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a car', () => {
    it('sucessfully created', async () => {
      const newCar = await carModel.create(carMock);

      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('searching all cars', () => {
    it('sucessfully found', async () => {
      const carsFound = await carModel.read();

      expect(carsFound).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('searching a car', () => {
    it('sucessfully found', async () => {
      const carsFound = await carModel.readOne('4edd40c86762e0fb12000003');

      expect(carsFound).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.readOne('invalid');
      } catch (error: any) {
        expect(error.message).to.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('changing a car', () => {
    it('sucessfully changed', async () => {
      const carsChanged = await carModel.update(
        '4edd40c86762e0fb12000003',
        carMockForChange,
      );

      expect(carsChanged).to.be.deep.equal(carMockForChangeWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.update('invalid', carMockForChange);
      } catch (error: any) {
        expect(error.message).to.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('deleting a car', () => {
    it('sucessfully deleted', async () => {
      const carsDeleted = await carModel.delete('4edd40c86762e0fb12000003');

      expect(carsDeleted).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.delete('invalid');
      } catch (error: any) {
        expect(error.message).to.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });

});