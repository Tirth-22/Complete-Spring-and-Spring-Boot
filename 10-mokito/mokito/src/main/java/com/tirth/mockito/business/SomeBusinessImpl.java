package com.tirth.mockito.business;

public class SomeBusinessImpl {
    private DataService dataService;

    public SomeBusinessImpl(DataService dataService) {
        this.dataService = dataService;
    }

    public int findMax() {
        int[] data = dataService.retriveAllData();
        int max = Integer.MIN_VALUE;
        for (int val : data) {
            if (val > max) {
                max = val;
            }
        }
        return max;
    }
}


interface DataService {
    int[] retriveAllData();
}