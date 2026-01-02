package com.tirth.mockito.list;

import org.junit.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ListTest {

    @Test
    public void simpleTest(){
        List mockList = mock(List.class);
        when(mockList.size()).thenReturn(1);
        assertEquals(1,mockList.size());
    }

    @Test
    public void multipleReturns() {
        List listMock = mock(List.class);
        //listMock.size() => 3
        when(listMock.size()).thenReturn(1).thenReturn(2);
        assertEquals(1, listMock.size());
        assertEquals(2, listMock.size());
        assertEquals(2, listMock.size());
        assertEquals(2, listMock.size());
    }

    @Test
    public void specificParameters() {
        List listMock = mock(List.class);
        //listMock.size() => 3
        when(listMock.get(0)).thenReturn("SomeString");
        assertEquals("SomeString", listMock.get(0));
        assertEquals(null, listMock.get(1));
    }

    @Test
    public void genericParameters() {
        List listMock = mock(List.class);
        //listMock.size() => 3
        when(listMock.get(Mockito.anyInt())).thenReturn("SomeOtherString");
        assertEquals("SomeOtherString", listMock.get(0));
        assertEquals("SomeOtherString", listMock.get(1));
    }
}
