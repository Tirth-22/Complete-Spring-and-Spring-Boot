package com.tirth.mockito.business;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class SomeBusinessMockTest {

    @Mock
    private DataService dataServiceMock;

    @InjectMocks
    private SomeBusinessImpl someBusinessImpl;

    @Test
    public void findMax_BasicforMulti() {
        when(dataServiceMock.retriveAllData()).thenReturn(new int[]{1,2,3});
        assertEquals(3,someBusinessImpl.findMax());
    }

    @Test
    public void findMax_BasicforOne() {
        when(dataServiceMock.retriveAllData()).thenReturn(new int[]{73});
        assertEquals(73,someBusinessImpl.findMax());
    }

    @Test
    public void findMax_BasicforEmpty() {
        when(dataServiceMock.retriveAllData()).thenReturn(new int[]{});
        assertEquals(Integer.MIN_VALUE,someBusinessImpl.findMax());
    }
}
