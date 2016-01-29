"use strict";
/*
	var G ={}; 

	$(document).ready(function(){

            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            camera.position.set(0,2,2);

            var renderer = new THREE.WebGLRenderer({
                antialias: true,
                clearColor: 0x000000,
                clearAlpha: 1
            });

            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, window.innerHeight );
                controls.handleResize();
            };

            /*document.addEventListener( 'keydown', G.onKeyDown, false);

            window.addEventListener('mousedown', G.onMouseDown, false);
            window.addEventListener('resize', onWindowResize, false);
            window.addEventListener('mousemove', G.onMouseMove, false);
            window.addEventListener('mouseup', G.onMouseUp, false);

            G.THREE = {
                scene : scene,
                camera : camera,
                renderer : renderer
            };

            var geometry = new THREE.PlaneGeometry(1,2);

            var planes = new THREE.Object3D();
            scene.add(planes);
            G.lol = [];

            for (var i =0; i < 1; i++){
            	var text1 = new THREE.ImageUtils.loadTexture('assets/lol1.jpg');
            	var text2 = new THREE.ImageUtils.loadTexture('assets/lol2.jpg');
            	var material1 = new THREE.MeshBasicMaterial( {  map: text1 } );

				material1.polygonOffset=true;
				material1.polygonOffsetFactor=1;
				material1.polygonOffsetUnits=1;
            	var material2 = new THREE.MeshBasicMaterial( {  map: text2 } );
				material2.polygonOffset=true;
				material2.polygonOffsetFactor=1;
				material2.polygonOffsetUnits=1;

				var mesh1 = new THREE.Mesh(geometry, text1);
				var mesh2 = new THREE.Mesh(geometry, text2)
				planes.add(mesh1);
				planes.add(mesh2);
				G.lol.push([mesh1,mesh2]);


            }

	        var origin = new THREE.Vector3( 0, 0, 0 );
	        var axes = new THREE.LineBasicMaterial({color: 0x000000,linewidth:2})
	        G.org = {};
	        

	        var ax1 = new THREE.Geometry();
	        ax1.vertices.push( origin.clone(), new THREE.Vector3( 1, 0, 0 ) );
	        axes.color.set(0xff0000);
	        G.org.x = new THREE.Line( ax1, axes.clone() );
	        
	        // y axis
	        var ax2 = new THREE.Geometry();
	        ax2.vertices.push( origin.clone(), new THREE.Vector3( 0, 1, 0 ) );
	        axes.color.set(0x00ff00);
	        G.org.y = new THREE.Line( ax2, axes.clone() );
	        
	        // z axis
	        var ax3 = new THREE.Geometry();
	        ax3.vertices.push( origin.clone(), new THREE.Vector3( 0, 0, 1 ) );
	        axes.color.set(0x0000ff);
	        G.org.z = new THREE.Line( ax3, axes.clone() );
	        
	        // Add the the scene
	        scene.add( G.org.x );
	        scene.add( G.org.y );
	        scene.add( G.org.z );

            var lol = function(){
            	for (var i = G.lol.length -1; i>=0; i--){
            		var omg = Math.random() * 2*Math.PI;
					G.lol[i][0].position.set(Math.cos(omg), Math.sin(omg), Math.sin(omg));
					G.lol[i][1].position.set(Math.cos(omg), Math.sin(omg), Math.sin(omg));
            	}
            }
            //build_ui();
;
            var render = function (){

            	//stuff on update
            	//lol();
            	camera.lookAt(0,0,0);
            	renderer.clear();
            	renderer.render(scene, camera);
            	requestAnimationFrame(render);

            };
            // loop it up 
            render();




	});

*/
