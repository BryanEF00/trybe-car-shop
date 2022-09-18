import { expect } from 'chai';
import sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';

import CarModel from "../../../models/Car";
import CarService from "../../../services/Car";
import { carMock, carMockForChange, carMockForChangeWithId, carMockWithId } from '../../mocks/carMock';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves([carMockWithId]);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'update')
      .onCall(0).resolves(carMockForChangeWithId)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'delete')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Car', () => {
    it('Success', async () => {
      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      try {
        await carService.create({} as any);
      } catch (error: any) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('Search all Cars', () => {
    it('Success', async () => {
      const carsFound = await carService.read();

      expect(carsFound).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Search a Car', () => {
    it('Success', async () => {
      const carFound = await carService.readOne(carMockWithId._id);

      expect(carFound).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      try {
        await carService.readOne(carMockWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  })

  describe('Update a Car', () => {
    it('Success', async () => {
      const carChanged = await carService.update(carMockWithId._id, carMockForChange);

      expect(carChanged).to.be.deep.equal(carMockForChangeWithId);
    });

    it('Failure: invalid body', async () => {
      try {
        await carService.update(carMockWithId._id, {} as any);
      } catch (error: any) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });

    it('Failure: _id not found', async () => {
      try {
        await carService.update(carMockWithId._id, carMockForChange);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  })

  describe('Delete a Car', () => {
    it('Success', async () => {
      const carDeleted = await carService.delete(carMockWithId._id);

      expect(carDeleted).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      try {
        await carService.delete(carMockWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  })

});