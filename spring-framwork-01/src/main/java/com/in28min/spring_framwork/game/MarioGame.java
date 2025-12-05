package com.in28min.spring_framwork.game;

public class MarioGame implements GamingConsole{
	
	public void up(){
        System.out.println("Jump");
    }

    public void down(){
        System.out.println("Go in the hole");
    }

    public void left(){
        System.out.println("Go Back");
    }

    public void right(){
        System.out.println("Accelerate");
    }
}
