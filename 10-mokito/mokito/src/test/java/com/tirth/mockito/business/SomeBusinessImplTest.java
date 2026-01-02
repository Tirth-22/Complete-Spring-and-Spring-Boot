package com.tirth.mockito.business;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class SomeBusinessImplTest {
    @Test
    public void findMax_Basic() {
        DataServiceStub dataServiceStub = new DataServiceStub();

        SomeBusinessImpl someBusinessImpl = new SomeBusinessImpl(dataServiceStub);
        int result = someBusinessImpl.findMax();
        assertEquals(3,result);
    }
}

class DataServiceStub implements DataService {
    @Override
    public int[] retriveAllData() {
        return new int[]{1, 2, 3};
    }
}