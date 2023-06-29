import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { Box, Image, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    
    let container;
    let camera, scene, renderer, controls;
    let starGeometry, starMaterial, stars;
    let pointLight;
    let cosmonaut;

    const init = () => {
      container = document.createElement("div");
      container.style.position = "fixed";
      container.style.top = 0;
      container.style.right = 0;
      container.style.width = "100%";
      container.style.height = "100%";
      container.style.overflow = "hidden";
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 15;
      camera.position.y = 5;
      camera.position.x = 10;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;

      createStars();
      loadModel();
      addLight();
      animate();

      window.addEventListener("resize", handleWindowResize);
      window.addEventListener("mousemove", handleMouseMove);
    };

    const createStars = () => {
      starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
      starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      stars = new THREE.Group();

      const numStars = 10000;
      for (let i = 0; i < numStars; i++) {
        const star = new THREE.Mesh(starGeometry, starMaterial);

        const x = THREE.MathUtils.randFloatSpread(window.innerWidth * 2);
        const y = THREE.MathUtils.randFloatSpread(window.innerHeight);
        const z = THREE.MathUtils.randFloatSpread(200) - 100;

        star.position.set(x, y, z);

        stars.add(star);
      }

      scene.add(stars);
    };

    const loadModel = () => {
      const loader = new GLTFLoader();

      loader.load("/milano2.glb", (gltf) => {
        cosmonaut = gltf.scene;

        cosmonaut.scale.set(4, 4, 4);
        cosmonaut.position.set(7, -10, -10);

        scene.add(cosmonaut);

        gsap.to(cosmonaut.scale, {
          x: 0.005,
          y: 0.005,
          z: 0.005,
          duration: 2,
          ease: "power2.out",
        });
        gsap.to(cosmonaut.position, { x: 2, duration: 2, ease: "power2.out" });
      });
    };

    const addLight = () => {
      pointLight = new THREE.PointLight(0xffffff, 1, 100);
      scene.add(pointLight);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.001;

      const lightIntensity = 1 + Math.sin(Date.now() * 0.001);
      pointLight.intensity = lightIntensity;

      renderer.render(scene, camera);
    };

    const handleWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const normalizedMouseX = (mouseX / window.innerWidth) * 2 - 1;
      const normalizedMouseY = -(mouseY / window.innerHeight) * 2 + 1;

      gsap.to(cosmonaut?.position, {
        x: normalizedMouseX * 2,
        y: normalizedMouseY * 2,
        duration: 0.5,
      });
    };

    init();
    AOS.init({ duration: 2000 });
    return () => {
      
      container.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };

    
  }, []);

  return (
    <Box ref={canvasRef}>
      <Box
        style={{
          position: "fixed",
          left: "20%",
          width: "100%",
          height: "100%",
          display: "flex",
          top: "0%",
          justifyContent: "flex-start",
          color: "#fff",
          fontSize: "24px",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          zIndex: 1,
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "30px",
          }}
        >
       
            <Image
              src="/avatar.png"
              alt="Your Image"
              borderRadius="full"
              boxSize="150px"
              marginRight="20px"
            />
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Seif Fekaier
            </Text>
          
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedBackground;
