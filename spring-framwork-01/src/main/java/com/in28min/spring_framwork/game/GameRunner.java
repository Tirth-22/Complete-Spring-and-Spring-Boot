package com.in28min.spring_framwork.game;

public class GameRunner {
	private GamingConsole game;
	
	public GameRunner(GamingConsole game) {
		this.game = game;
	}
	
	public void run() {
		System.out.println("Running game : " + game);
        game.up();
        game.left();
        game.down();
        game.right();
	}
}
