/**
 * Originally based on Seb Lee Delisle's Three.js tutorial.
 */
window.Starfield = function() {

  var NUM_STARS = 5000,
    STAR_SPREAD = 1500,
    CAMERA_Z_START = 500,
    CAMERA_Z_MIN = 0,
    DURATION_MILLIS = 30 * 1000,
    camera,
    scene,
    renderer,
    particles,
    tween,
    starTexture = THREE.ImageUtils.loadTexture('../images/star-round.png'),
    width = window.innerWidth,
    height = window.innerHeight;


  this.init = function(container) {

    camera = new THREE.PerspectiveCamera(75, width / height, 1, CAMERA_Z_START );
    camera.position.z = CAMERA_Z_START;

    scene = new THREE.Scene();
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );

    container.appendChild( renderer.domElement );

    makeParticles();

    startTween();

    animate();

  };

  function startTween() {

    tween = new TWEEN.Tween( camera.position )
      .to( { z: CAMERA_Z_MIN }, DURATION_MILLIS )
      .repeat(Infinity)
      .yoyo()
      .start();

  };


  function animate(time) {

    TWEEN.update(time);

    renderer.render( scene, camera );

    requestAnimationFrame( animate );

  }

  /**
   * Creates a random field of Particle objects
   */
  function makeParticles() {

    var material,
      geometry = new THREE.Geometry();

    for( var i = 0; i < NUM_STARS; i ++ ) {

      var vertex = new THREE.Vector3();
      // Spread centred around 0
      vertex.x = Math.random() * STAR_SPREAD - (STAR_SPREAD / 2);
      vertex.y = Math.random() * STAR_SPREAD - (STAR_SPREAD / 2);
      vertex.z = Math.random() * STAR_SPREAD - (STAR_SPREAD / 2);

      geometry.vertices.push( vertex );

    }

    material = new THREE.PointCloudMaterial({
      size: 4,
      color: 0xffffff,
      map: starTexture,
      transparent: true,
      opacity: 0.5
    } );

    particles = new THREE.PointCloud( geometry, material );

    scene.add( particles );

  }

};
