package com.in28min.spring_framwork;

import com.in28min.spring_framwork.game.GameRunner;
import com.in28min.spring_framwork.game.PacmanGame;

public class App01GamingBasicJava {

	public static void main(String[] args) {
	
//		var game = new MarioGame();
//      var game = new SuperContraGame();
        var game = new PacmanGame();
		var gameRunner = new GameRunner(game);
		gameRunner.run();
	}

}
