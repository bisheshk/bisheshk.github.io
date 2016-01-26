"use strict";
	
	var G ={}; //global variable to hold our references

	$document.ready.function(){

            // Make our three fundamental components:
            var scene = new THREE.Scene();
            
            //Initialize the camera 
            var camera = new THREE.PerspectiveCamera( 75, ASPECT, 0.1, 1000 );
            camera.position.set(0,2,2);

            var renderer = new THREE.WebGLRenderer({
                antialias: true,
                clearColor: 0x000000,
                clearAlpha: 1
            });

            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );




	}
/*
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,400italic' rel='stylesheet' type='text/css'>
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    	<link rel="stylesheet" href="main.css">
    	*/