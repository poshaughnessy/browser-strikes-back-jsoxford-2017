/**
 * Originally based on Seb Lee Delisle's Three.js tutorial.
 */
window.Starfield = function() {

  var NUM_STARS = 5000,
    STAR_SPREAD = 1500,
    CAMERA_Z_START = 1000,
    CAMERA_Z_MIN = 0,
    FWD_DURATION_MILLIS = 60 * 1000,
    BWD_DURATION_MILLIS = 1000,
    camera,
    scene,
    renderer,
    particles,
    width = window.innerWidth,
    height = window.innerHeight,
    starTexture = THREE.ImageUtils.loadTexture('../images/star-round.png');


  this.init = function(container) {

    camera = new THREE.PerspectiveCamera(75, width / height, 1, CAMERA_Z_START );
    camera.position.z = CAMERA_Z_START;

    scene = new THREE.Scene();
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();

    setRendererSize();

    container.appendChild( renderer.domElement );

    makeParticles();

    startTween();

    animate();

    window.addEventListener('resize', setRendererSize);

  };

  function setRendererSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    renderer.setSize( width, height );
  }

  function startTween() {

    var tweenFwd = new TWEEN.Tween( camera.position )
      .to( { z: CAMERA_Z_MIN }, FWD_DURATION_MILLIS );

    var tweenBwd = new TWEEN.Tween( camera.position )
      .to( { z: CAMERA_Z_START }, BWD_DURATION_MILLIS )
      .easing( TWEEN.Easing.Quadratic.InOut );

    tweenFwd.chain( tweenBwd );
    tweenBwd.chain( tweenFwd );

    tweenFwd.start();

  }

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
