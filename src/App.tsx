import React from 'react';
import './App.scss';

import {Container, Row, Col} from 'react-bootstrap';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import HeaderImage from './components/headerImage';

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={2} className="sidebar bg-light">
            <div className="sidebar-sticky">
              <div>
                <Link to="/" className="nav-link">
                  <img src="kitten.jpg" alt="Logo" />
                  <h3>test instance name</h3>
                </Link>
              </div>
              <hr />
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/assets.php">
                    Assets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/files.php">
                    Downloads
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/jobs.php">
                    Internal Crew Vacancies
                  </a>
                </li>
              </ul>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Other</span>
                <a className="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://adam-rms.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AdamRMS Login
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="content">
            <HeaderImage></HeaderImage>
            <div className="content-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a velit id massa facilisis gravida. Sed eu molestie lorem. Quisque
              iaculis arcu at est pulvinar volutpat vel ac mi. In porta
              fringilla augue in cursus. Cras tincidunt mi non tortor convallis,
              non euismod mauris mattis. Sed vitae lacus sagittis, euismod
              sapien ac, dignissim velit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas auctor tincidunt ligula ac
              aliquam. Fusce auctor mauris maximus, molestie risus eget, posuere
              nisi. In hac habitasse platea dictumst. Ut ac dignissim est. Ut
              vulputate leo odio, ac sodales diam semper tempor. Fusce iaculis
              turpis sollicitudin euismod vulputate. Suspendisse mollis leo
              eros, eu maximus ligula facilisis vel. Sed rutrum nisl eget enim
              hendrerit, quis venenatis urna malesuada. Pellentesque eget
              feugiat urna. Vivamus urna nibh, euismod vitae tortor sed, aliquam
              venenatis libero. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Morbi et mollis
              lacus, non feugiat risus. Fusce auctor sagittis lobortis. Aenean
              tristique ullamcorper lacus. Proin dictum ultrices ligula, vitae
              mollis ligula sollicitudin at. Donec dignissim vulputate urna, eu
              hendrerit dui faucibus ut. Pellentesque cursus sagittis quam, id
              blandit tortor tincidunt quis. Fusce vulputate blandit erat at
              scelerisque. Quisque vitae diam luctus, volutpat dui nec, auctor
              erat. Maecenas sodales consequat fringilla. Fusce suscipit iaculis
              accumsan. Integer dignissim, dolor auctor placerat sagittis, sem
              ante porta nulla, venenatis lobortis purus quam pulvinar lacus.
              Sed vulputate mollis diam eget interdum. Mauris at lacinia turpis,
              non porta nunc. Duis quis fringilla dolor. Nunc orci leo,
              tincidunt eget placerat sollicitudin, rhoncus eu quam. Morbi
              elementum, ligula eget vehicula rutrum, erat lorem luctus nulla,
              vitae convallis justo nisi non dolor. In hac habitasse platea
              dictumst. Mauris sodales gravida dui, sagittis ornare libero
              dapibus nec. Suspendisse non tincidunt nibh. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aenean varius mi facilisis
              porta commodo. Etiam sodales risus eu accumsan accumsan. Nullam
              tempus, augue ac rhoncus dapibus, dolor ex porta ex, in tempor
              velit libero ut sem. Sed non euismod enim. Cras porta, diam non
              pellentesque egestas, leo massa elementum turpis, at semper neque
              nisi ac est. Aliquam ut nisi efficitur, pulvinar nibh at, tempor
              magna. Morbi consectetur eros vitae eros ornare, quis pharetra
              eros luctus. Integer tempus metus in sapien gravida luctus. Aenean
              et finibus tortor. Sed dignissim tincidunt laoreet. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Morbi vestibulum enim nisl, ut sagittis orci
              lobortis sed. Donec convallis ex leo, non consequat dui tincidunt
              eu. Donec commodo, augue sit amet facilisis accumsan, eros sapien
              dictum turpis, at dictum ligula ante eu sem. Nulla purus nulla,
              condimentum nec orci non, tincidunt posuere odio. Sed ut bibendum
              nulla. In fringilla, quam vitae vehicula faucibus, metus metus
              dapibus est, luctus suscipit justo mauris eget enim. Nulla
              ultricies feugiat libero, nec fringilla leo eleifend vitae.
              Pellentesque eget volutpat dui. Nulla nec leo vehicula, feugiat
              arcu id, laoreet odio. In malesuada erat tincidunt lorem consequat
              imperdiet eu egestas dolor. Pellentesque neque odio, fermentum et
              porta eu, ornare consectetur dui. Donec laoreet urna quis
              venenatis vulputate. Etiam accumsan luctus massa quis dictum.
              Mauris ultricies volutpat placerat. Curabitur fermentum volutpat
              dui, quis commodo nisi sollicitudin sit amet. Phasellus cursus
              lorem id dolor placerat interdum. In id quam non nisl scelerisque
              auctor. Integer et velit aliquam, porttitor dui nec, rutrum est.
              Maecenas felis felis, ultricies sollicitudin lacinia ac,
              condimentum sed tortor. Proin fermentum est nisl, nec molestie
              ligula semper non. Curabitur eget iaculis felis, eget hendrerit
              libero. Pellentesque maximus pharetra sodales. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur a velit id massa
              facilisis gravida. Sed eu molestie lorem. Quisque iaculis arcu at
              est pulvinar volutpat vel ac mi. In porta fringilla augue in
              cursus. Cras tincidunt mi non tortor convallis, non euismod mauris
              mattis. Sed vitae lacus sagittis, euismod sapien ac, dignissim
              velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor tincidunt ligula ac aliquam. Fusce auctor mauris
              maximus, molestie risus eget, posuere nisi. In hac habitasse
              platea dictumst. Ut ac dignissim est. Ut vulputate leo odio, ac
              sodales diam semper tempor. Fusce iaculis turpis sollicitudin
              euismod vulputate. Suspendisse mollis leo eros, eu maximus ligula
              facilisis vel. Sed rutrum nisl eget enim hendrerit, quis venenatis
              urna malesuada. Pellentesque eget feugiat urna. Vivamus urna nibh,
              euismod vitae tortor sed, aliquam venenatis libero. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Morbi et mollis lacus, non feugiat risus. Fusce
              auctor sagittis lobortis. Aenean tristique ullamcorper lacus.
              Proin dictum ultrices ligula, vitae mollis ligula sollicitudin at.
              Donec dignissim vulputate urna, eu hendrerit dui faucibus ut.
              Pellentesque cursus sagittis quam, id blandit tortor tincidunt
              quis. Fusce vulputate blandit erat at scelerisque. Quisque vitae
              diam luctus, volutpat dui nec, auctor erat. Maecenas sodales
              consequat fringilla. Fusce suscipit iaculis accumsan. Integer
              dignissim, dolor auctor placerat sagittis, sem ante porta nulla,
              venenatis lobortis purus quam pulvinar lacus. Sed vulputate mollis
              diam eget interdum. Mauris at lacinia turpis, non porta nunc. Duis
              quis fringilla dolor. Nunc orci leo, tincidunt eget placerat
              sollicitudin, rhoncus eu quam. Morbi elementum, ligula eget
              vehicula rutrum, erat lorem luctus nulla, vitae convallis justo
              nisi non dolor. In hac habitasse platea dictumst. Mauris sodales
              gravida dui, sagittis ornare libero dapibus nec. Suspendisse non
              tincidunt nibh. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Aenean varius mi facilisis porta commodo. Etiam
              sodales risus eu accumsan accumsan. Nullam tempus, augue ac
              rhoncus dapibus, dolor ex porta ex, in tempor velit libero ut sem.
              Sed non euismod enim. Cras porta, diam non pellentesque egestas,
              leo massa elementum turpis, at semper neque nisi ac est. Aliquam
              ut nisi efficitur, pulvinar nibh at, tempor magna. Morbi
              consectetur eros vitae eros ornare, quis pharetra eros luctus.
              Integer tempus metus in sapien gravida luctus. Aenean et finibus
              tortor. Sed dignissim tincidunt laoreet. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Morbi vestibulum enim nisl, ut sagittis orci lobortis
              sed. Donec convallis ex leo, non consequat dui tincidunt eu. Donec
              commodo, augue sit amet facilisis accumsan, eros sapien dictum
              turpis, at dictum ligula ante eu sem. Nulla purus nulla,
              condimentum nec orci non, tincidunt posuere odio. Sed ut bibendum
              nulla. In fringilla, quam vitae vehicula faucibus, metus metus
              dapibus est, luctus suscipit justo mauris eget enim. Nulla
              ultricies feugiat libero, nec fringilla leo eleifend vitae.
              Pellentesque eget volutpat dui. Nulla nec leo vehicula, feugiat
              arcu id, laoreet odio. In malesuada erat tincidunt lorem consequat
              imperdiet eu egestas dolor. Pellentesque neque odio, fermentum et
              porta eu, ornare consectetur dui. Donec laoreet urna quis
              venenatis vulputate. Etiam accumsan luctus massa quis dictum.
              Mauris ultricies volutpat placerat. Curabitur fermentum volutpat
              dui, quis commodo nisi sollicitudin sit amet. Phasellus cursus
              lorem id dolor placerat interdum. In id quam non nisl scelerisque
              auctor. Integer et velit aliquam, porttitor dui nec, rutrum est.
              Maecenas felis felis, ultricies sollicitudin lacinia ac,
              condimentum sed tortor. Proin fermentum est nisl, nec molestie
              ligula semper non. Curabitur eget iaculis felis, eget hendrerit
              libero. Pellentesque maximus pharetra sodales. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur a velit id massa
              facilisis gravida. Sed eu molestie lorem. Quisque iaculis arcu at
              est pulvinar volutpat vel ac mi. In porta fringilla augue in
              cursus. Cras tincidunt mi non tortor convallis, non euismod mauris
              mattis. Sed vitae lacus sagittis, euismod sapien ac, dignissim
              velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor tincidunt ligula ac aliquam. Fusce auctor mauris
              maximus, molestie risus eget, posuere nisi. In hac habitasse
              platea dictumst. Ut ac dignissim est. Ut vulputate leo odio, ac
              sodales diam semper tempor. Fusce iaculis turpis sollicitudin
              euismod vulputate. Suspendisse mollis leo eros, eu maximus ligula
              facilisis vel. Sed rutrum nisl eget enim hendrerit, quis venenatis
              urna malesuada. Pellentesque eget feugiat urna. Vivamus urna nibh,
              euismod vitae tortor sed, aliquam venenatis libero. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Morbi et mollis lacus, non feugiat risus. Fusce
              auctor sagittis lobortis. Aenean tristique ullamcorper lacus.
              Proin dictum ultrices ligula, vitae mollis ligula sollicitudin at.
              Donec dignissim vulputate urna, eu hendrerit dui faucibus ut.
              Pellentesque cursus sagittis quam, id blandit tortor tincidunt
              quis. Fusce vulputate blandit erat at scelerisque. Quisque vitae
              diam luctus, volutpat dui nec, auctor erat. Maecenas sodales
              consequat fringilla. Fusce suscipit iaculis accumsan. Integer
              dignissim, dolor auctor placerat sagittis, sem ante porta nulla,
              venenatis lobortis purus quam pulvinar lacus. Sed vulputate mollis
              diam eget interdum. Mauris at lacinia turpis, non porta nunc. Duis
              quis fringilla dolor. Nunc orci leo, tincidunt eget placerat
              sollicitudin, rhoncus eu quam. Morbi elementum, ligula eget
              vehicula rutrum, erat lorem luctus nulla, vitae convallis justo
              nisi non dolor. In hac habitasse platea dictumst. Mauris sodales
              gravida dui, sagittis ornare libero dapibus nec. Suspendisse non
              tincidunt nibh. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Aenean varius mi facilisis porta commodo. Etiam
              sodales risus eu accumsan accumsan. Nullam tempus, augue ac
              rhoncus dapibus, dolor ex porta ex, in tempor velit libero ut sem.
              Sed non euismod enim. Cras porta, diam non pellentesque egestas,
              leo massa elementum turpis, at semper neque nisi ac est. Aliquam
              ut nisi efficitur, pulvinar nibh at, tempor magna. Morbi
              consectetur eros vitae eros ornare, quis pharetra eros luctus.
              Integer tempus metus in sapien gravida luctus. Aenean et finibus
              tortor. Sed dignissim tincidunt laoreet. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Morbi vestibulum enim nisl, ut sagittis orci lobortis
              sed. Donec convallis ex leo, non consequat dui tincidunt eu. Donec
              commodo, augue sit amet facilisis accumsan, eros sapien dictum
              turpis, at dictum ligula ante eu sem. Nulla purus nulla,
              condimentum nec orci non, tincidunt posuere odio. Sed ut bibendum
              nulla. In fringilla, quam vitae vehicula faucibus, metus metus
              dapibus est, luctus suscipit justo mauris eget enim. Nulla
              ultricies feugiat libero, nec fringilla leo eleifend vitae.
              Pellentesque eget volutpat dui. Nulla nec leo vehicula, feugiat
              arcu id, laoreet odio. In malesuada erat tincidunt lorem consequat
              imperdiet eu egestas dolor. Pellentesque neque odio, fermentum et
              porta eu, ornare consectetur dui. Donec laoreet urna quis
              venenatis vulputate. Etiam accumsan luctus massa quis dictum.
              Mauris ultricies volutpat placerat. Curabitur fermentum volutpat
              dui, quis commodo nisi sollicitudin sit amet. Phasellus cursus
              lorem id dolor placerat interdum. In id quam non nisl scelerisque
              auctor. Integer et velit aliquam, porttitor dui nec, rutrum est.
              Maecenas felis felis, ultricies sollicitudin lacinia ac,
              condimentum sed tortor. Proin fermentum est nisl, nec molestie
              ligula semper non. Curabitur eget iaculis felis, eget hendrerit
              libero. Pellentesque maximus pharetra sodales. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur a velit id massa
              facilisis gravida. Sed eu molestie lorem. Quisque iaculis arcu at
              est pulvinar volutpat vel ac mi. In porta fringilla augue in
              cursus. Cras tincidunt mi non tortor convallis, non euismod mauris
              mattis. Sed vitae lacus sagittis, euismod sapien ac, dignissim
              velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor tincidunt ligula ac aliquam. Fusce auctor mauris
              maximus, molestie risus eget, posuere nisi. In hac habitasse
              platea dictumst. Ut ac dignissim est. Ut vulputate leo odio, ac
              sodales diam semper tempor. Fusce iaculis turpis sollicitudin
              euismod vulputate. Suspendisse mollis leo eros, eu maximus ligula
              facilisis vel. Sed rutrum nisl eget enim hendrerit, quis venenatis
              urna malesuada. Pellentesque eget feugiat urna. Vivamus urna nibh,
              euismod vitae tortor sed, aliquam venenatis libero. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Morbi et mollis lacus, non feugiat risus. Fusce
              auctor sagittis lobortis. Aenean tristique ullamcorper lacus.
              Proin dictum ultrices ligula, vitae mollis ligula sollicitudin at.
              Donec dignissim vulputate urna, eu hendrerit dui faucibus ut.
              Pellentesque cursus sagittis quam, id blandit tortor tincidunt
              quis. Fusce vulputate blandit erat at scelerisque. Quisque vitae
              diam luctus, volutpat dui nec, auctor erat. Maecenas sodales
              consequat fringilla. Fusce suscipit iaculis accumsan. Integer
              dignissim, dolor auctor placerat sagittis, sem ante porta nulla,
              venenatis lobortis purus quam pulvinar lacus. Sed vulputate mollis
              diam eget interdum. Mauris at lacinia turpis, non porta nunc. Duis
              quis fringilla dolor. Nunc orci leo, tincidunt eget placerat
              sollicitudin, rhoncus eu quam. Morbi elementum, ligula eget
              vehicula rutrum, erat lorem luctus nulla, vitae convallis justo
              nisi non dolor. In hac habitasse platea dictumst. Mauris sodales
              gravida dui, sagittis ornare libero dapibus nec. Suspendisse non
              tincidunt nibh. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Aenean varius mi facilisis porta commodo. Etiam
              sodales risus eu accumsan accumsan. Nullam tempus, augue ac
              rhoncus dapibus, dolor ex porta ex, in tempor velit libero ut sem.
              Sed non euismod enim. Cras porta, diam non pellentesque egestas,
              leo massa elementum turpis, at semper neque nisi ac est. Aliquam
              ut nisi efficitur, pulvinar nibh at, tempor magna. Morbi
              consectetur eros vitae eros ornare, quis pharetra eros luctus.
              Integer tempus metus in sapien gravida luctus. Aenean et finibus
              tortor. Sed dignissim tincidunt laoreet. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Morbi vestibulum enim nisl, ut sagittis orci lobortis
              sed. Donec convallis ex leo, non consequat dui tincidunt eu. Donec
              commodo, augue sit amet facilisis accumsan, eros sapien dictum
              turpis, at dictum ligula ante eu sem. Nulla purus nulla,
              condimentum nec orci non, tincidunt posuere odio. Sed ut bibendum
              nulla. In fringilla, quam vitae vehicula faucibus, metus metus
              dapibus est, luctus suscipit justo mauris eget enim. Nulla
              ultricies feugiat libero, nec fringilla leo eleifend vitae.
              Pellentesque eget volutpat dui. Nulla nec leo vehicula, feugiat
              arcu id, laoreet odio. In malesuada erat tincidunt lorem consequat
              imperdiet eu egestas dolor. Pellentesque neque odio, fermentum et
              porta eu, ornare consectetur dui. Donec laoreet urna quis
              venenatis vulputate. Etiam accumsan luctus massa quis dictum.
              Mauris ultricies volutpat placerat. Curabitur fermentum volutpat
              dui, quis commodo nisi sollicitudin sit amet. Phasellus cursus
              lorem id dolor placerat interdum. In id quam non nisl scelerisque
              auctor. Integer et velit aliquam, porttitor dui nec, rutrum est.
              Maecenas felis felis, ultricies sollicitudin lacinia ac,
              condimentum sed tortor. Proin fermentum est nisl, nec molestie
              ligula semper non. Curabitur eget iaculis felis, eget hendrerit
              libero. Pellentesque maximus pharetra sodales. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur a velit id massa
              facilisis gravida. Sed eu molestie lorem. Quisque iaculis arcu at
              est pulvinar volutpat vel ac mi. In porta fringilla augue in
              cursus. Cras tincidunt mi non tortor convallis, non euismod mauris
              mattis. Sed vitae lacus sagittis, euismod sapien ac, dignissim
              velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor tincidunt ligula ac aliquam. Fusce auctor mauris
              maximus, molestie risus eget, posuere nisi. In hac habitasse
              platea dictumst. Ut ac dignissim est. Ut vulputate leo odio, ac
              sodales diam semper tempor. Fusce iaculis turpis sollicitudin
              euismod vulputate. Suspendisse mollis leo eros, eu maximus ligula
              facilisis vel. Sed rutrum nisl eget enim hendrerit, quis venenatis
              urna malesuada. Pellentesque eget feugiat urna. Vivamus urna nibh,
              euismod vitae tortor sed, aliquam venenatis libero. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Morbi et mollis lacus, non feugiat risus. Fusce
              auctor sagittis lobortis. Aenean tristique ullamcorper lacus.
              Proin dictum ultrices ligula, vitae mollis ligula sollicitudin at.
              Donec dignissim vulputate urna, eu hendrerit dui faucibus ut.
              Pellentesque cursus sagittis quam, id blandit tortor tincidunt
              quis. Fusce vulputate blandit erat at scelerisque. Quisque vitae
              diam luctus, volutpat dui nec, auctor erat. Maecenas sodales
              consequat fringilla. Fusce suscipit iaculis accumsan. Integer
              dignissim, dolor auctor placerat sagittis, sem ante porta nulla,
              venenatis lobortis purus quam pulvinar lacus. Sed vulputate mollis
              diam eget interdum. Mauris at lacinia turpis, non porta nunc. Duis
              quis fringilla dolor. Nunc orci leo, tincidunt eget placerat
              sollicitudin, rhoncus eu quam. Morbi elementum, ligula eget
              vehicula rutrum, erat lorem luctus nulla, vitae convallis justo
              nisi non dolor. In hac habitasse platea dictumst. Mauris sodales
              gravida dui, sagittis ornare libero dapibus nec. Suspendisse non
              tincidunt nibh. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Aenean varius mi facilisis porta commodo. Etiam
              sodales risus eu accumsan accumsan. Nullam tempus, augue ac
              rhoncus dapibus, dolor ex porta ex, in tempor velit libero ut sem.
              Sed non euismod enim. Cras porta, diam non pellentesque egestas,
              leo massa elementum turpis, at semper neque nisi ac est. Aliquam
              ut nisi efficitur, pulvinar nibh at, tempor magna. Morbi
              consectetur eros vitae eros ornare, quis pharetra eros luctus.
              Integer tempus metus in sapien gravida luctus. Aenean et finibus
              tortor. Sed dignissim tincidunt laoreet. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Morbi vestibulum enim nisl, ut sagittis orci lobortis
              sed. Donec convallis ex leo, non consequat dui tincidunt eu. Donec
              commodo, augue sit amet facilisis accumsan, eros sapien dictum
              turpis, at dictum ligula ante eu sem. Nulla purus nulla,
              condimentum nec orci non, tincidunt posuere odio. Sed ut bibendum
              nulla. In fringilla, quam vitae vehicula faucibus, metus metus
              dapibus est, luctus suscipit justo mauris eget enim. Nulla
              ultricies feugiat libero, nec fringilla leo eleifend vitae.
              Pellentesque eget volutpat dui. Nulla nec leo vehicula, feugiat
              arcu id, laoreet odio. In malesuada erat tincidunt lorem consequat
              imperdiet eu egestas dolor. Pellentesque neque odio, fermentum et
              porta eu, ornare consectetur dui. Donec laoreet urna quis
              venenatis vulputate. Etiam accumsan luctus massa quis dictum.
              Mauris ultricies volutpat placerat. Curabitur fermentum volutpat
              dui, quis commodo nisi sollicitudin sit amet. Phasellus cursus
              lorem id dolor placerat interdum. In id quam non nisl scelerisque
              auctor. Integer et velit aliquam, porttitor dui nec, rutrum est.
              Maecenas felis felis, ultricies sollicitudin lacinia ac,
              condimentum sed tortor. Proin fermentum est nisl, nec molestie
              ligula semper non. Curabitur eget iaculis felis, eget hendrerit
              libero. Pellentesque maximus pharetra sodales. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur a velit id massa
              facilisis gravida. Sed eu molestie lorem. Quisque iaculis arcu at
              est pulvinar volutpat vel ac mi. In porta fringilla augue in
              cursus. Cras tincidunt mi non tortor convallis, non euismod mauris
              mattis. Sed vitae lacus sagittis, euismod sapien ac, dignissim
              velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor tincidunt ligula ac aliquam. Fusce auctor mauris
              maximus, molestie risus eget, posuere nisi. In hac habitasse
              platea dictumst. Ut ac dignissim est. Ut vulputate leo odio, ac
              sodales diam semper tempor. Fusce iaculis turpis sollicitudin
              euismod vulputate. Suspendisse mollis leo eros, eu maximus ligula
              facilisis vel. Sed rutrum nisl eget enim hendrerit, quis venenatis
              urna malesuada. Pellentesque eget feugiat urna. Vivamus urna nibh,
              euismod vitae tortor sed, aliquam venenatis libero. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Morbi et mollis lacus, non feugiat risus. Fusce
              auctor sagittis lobortis. Aenean tristique ullamcorper lacus.
              Proin dictum ultrices ligula, vitae mollis ligula sollicitudin at.
              Donec dignissim vulputate urna, eu hendrerit dui faucibus ut.
              Pellentesque cursus sagittis quam, id blandit tortor tincidunt
              quis. Fusce vulputate blandit erat at scelerisque. Quisque vitae
              diam luctus, volutpat dui nec, auctor erat. Maecenas sodales
              consequat fringilla. Fusce suscipit iaculis accumsan. Integer
              dignissim, dolor auctor placerat sagittis, sem ante porta nulla,
              venenatis lobortis purus quam pulvinar lacus. Sed vulputate mollis
              diam eget interdum. Mauris at lacinia turpis, non porta nunc. Duis
              quis fringilla dolor. Nunc orci leo, tincidunt eget placerat
              sollicitudin, rhoncus eu quam. Morbi elementum, ligula eget
              vehicula rutrum, erat lorem luctus nulla, vitae convallis justo
              nisi non dolor. In hac habitasse platea dictumst. Mauris sodales
              gravida dui, sagittis ornare libero dapibus nec. Suspendisse non
              tincidunt nibh. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Aenean varius mi facilisis porta commodo. Etiam
              sodales risus eu accumsan accumsan. Nullam tempus, augue ac
              rhoncus dapibus, dolor ex porta ex, in tempor velit libero ut sem.
              Sed non euismod enim. Cras porta, diam non pellentesque egestas,
              leo massa elementum turpis, at semper neque nisi ac est. Aliquam
              ut nisi efficitur, pulvinar nibh at, tempor magna. Morbi
              consectetur eros vitae eros ornare, quis pharetra eros luctus.
              Integer tempus metus in sapien gravida luctus. Aenean et finibus
              tortor. Sed dignissim tincidunt laoreet. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Morbi vestibulum enim nisl, ut sagittis orci lobortis
              sed. Donec convallis ex leo, non consequat dui tincidunt eu. Donec
              commodo, augue sit amet facilisis accumsan, eros sapien dictum
              turpis, at dictum ligula ante eu sem. Nulla purus nulla,
              condimentum nec orci non, tincidunt posuere odio. Sed ut bibendum
              nulla. In fringilla, quam vitae vehicula faucibus, metus metus
              dapibus est, luctus suscipit justo mauris eget enim. Nulla
              ultricies feugiat libero, nec fringilla leo eleifend vitae.
              Pellentesque eget volutpat dui. Nulla nec leo vehicula, feugiat
              arcu id, laoreet odio. In malesuada erat tincidunt lorem consequat
              imperdiet eu egestas dolor. Pellentesque neque odio, fermentum et
              porta eu, ornare consectetur dui. Donec laoreet urna quis
              venenatis vulputate. Etiam accumsan luctus massa quis dictum.
              Mauris ultricies volutpat placerat. Curabitur fermentum volutpat
              dui, quis commodo nisi sollicitudin sit amet. Phasellus cursus
              lorem id dolor placerat interdum. In id quam non nisl scelerisque
              auctor. Integer et velit aliquam, porttitor dui nec, rutrum est.
              Maecenas felis felis, ultricies sollicitudin lacinia ac,
              condimentum sed tortor. Proin fermentum est nisl, nec molestie
              ligula semper non. Curabitur eget iaculis felis, eget hendrerit
              libero. Pellentesque maximus pharetra sodales. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur a velit id massa
              facilisis gravida. Sed eu molestie lorem. Quisque iaculis arcu at
              est pulvinar volutpat vel ac mi. In porta fringilla augue in
              cursus. Cras tincidunt mi non tortor convallis, non euismod mauris
              mattis. Sed vitae lacus sagittis, euismod sapien ac, dignissim
              velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor tincidunt ligula ac aliquam. Fusce auctor mauris
              maximus, molestie risus eget, posuere nisi. In hac habitasse
              platea dictumst. Ut ac dignissim est. Ut vulputate leo odio, ac
              sodales diam semper tempor. Fusce iaculis turpis sollicitudin
              euismod vulputate. Suspendisse mollis leo eros, eu maximus ligula
              facilisis vel. Sed rutrum nisl eget enim hendrerit, quis venenatis
              urna malesuada. Pellentesque eget feugiat urna. Vivamus urna nibh,
              euismod vitae tortor sed, aliquam venenatis libero. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Morbi et mollis lacus, non feugiat risus. Fusce
              auctor sagittis lobortis. Aenean tristique ullamcorper lacus.
              Proin dictum ultrices ligula, vitae mollis ligula sollicitudin at.
              Donec dignissim vulputate urna, eu hendrerit dui faucibus ut.
              Pellentesque cursus sagittis quam, id blandit tortor tincidunt
              quis. Fusce vulputate blandit erat at scelerisque. Quisque vitae
              diam luctus, volutpat dui nec, auctor erat. Maecenas sodales
              consequat fringilla. Fusce suscipit iaculis accumsan. Integer
              dignissim, dolor auctor placerat sagittis, sem ante porta nulla,
              venenatis lobortis purus quam pulvinar lacus. Sed vulputate mollis
              diam eget interdum. Mauris at lacinia turpis, non porta nunc. Duis
              quis fringilla dolor. Nunc orci leo, tincidunt eget placerat
              sollicitudin, rhoncus eu quam. Morbi elementum, ligula eget
              vehicula rutrum, erat lorem luctus nulla, vitae convallis justo
              nisi non dolor. In hac habitasse platea dictumst. Mauris sodales
              gravida dui, sagittis ornare libero dapibus nec. Suspendisse non
              tincidunt nibh. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Aenean varius mi facilisis porta commodo. Etiam
              sodales risus eu accumsan accumsan. Nullam tempus, augue ac
              rhoncus dapibus, dolor ex porta ex, in tempor velit libero ut sem.
              Sed non euismod enim. Cras porta, diam non pellentesque egestas,
              leo massa elementum turpis, at semper neque nisi ac est. Aliquam
              ut nisi efficitur, pulvinar nibh at, tempor magna. Morbi
              consectetur eros vitae eros ornare, quis pharetra eros luctus.
              Integer tempus metus in sapien gravida luctus. Aenean et finibus
              tortor. Sed dignissim tincidunt laoreet. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Morbi vestibulum enim nisl, ut sagittis orci lobortis
              sed. Donec convallis ex leo, non consequat dui tincidunt eu. Donec
              commodo, augue sit amet facilisis accumsan, eros sapien dictum
              turpis, at dictum ligula ante eu sem. Nulla purus nulla,
              condimentum nec orci non, tincidunt posuere odio. Sed ut bibendum
              nulla. In fringilla, quam vitae vehicula faucibus, metus metus
              dapibus est, luctus suscipit justo mauris eget enim. Nulla
              ultricies feugiat libero, nec fringilla leo eleifend vitae.
              Pellentesque eget volutpat dui. Nulla nec leo vehicula, feugiat
              arcu id, laoreet odio. In malesuada erat tincidunt lorem consequat
              imperdiet eu egestas dolor. Pellentesque neque odio, fermentum et
              porta eu, ornare consectetur dui. Donec laoreet urna quis
              venenatis vulputate. Etiam accumsan luctus massa quis dictum.
              Mauris ultricies volutpat placerat. Curabitur fermentum volutpat
              dui, quis commodo nisi sollicitudin sit amet. Phasellus cursus
              lorem id dolor placerat interdum. In id quam non nisl scelerisque
              auctor. Integer et velit aliquam, porttitor dui nec, rutrum est.
              Maecenas felis felis, ultricies sollicitudin lacinia ac,
              condimentum sed tortor. Proin fermentum est nisl, nec molestie
              ligula semper non. Curabitur eget iaculis felis, eget hendrerit
              libero. Pellentesque maximus pharetra sodales.
            </div>
          </Col>
        </Row>
        <Row className="footer bg-light">
          <Col className="footer-left" xs={12} sm={12} md={12} lg={6}>
            Fotter TExt OR Proudly powered by{' '}
            <a href="https://adam-rms.com">AdamRMS</a>
          </Col>
          <Col className="footer-right" xs={12} sm={12} md={12} lg={6}>
            {process.env.REACT_APP_VERSION}
            <strong>
              &copy;2018-{new Date().getFullYear()}{' '}
              <a href="https://bithell.studio">Bithell Studios Ltd</a>.
            </strong>{' '}
            All rights reserved.
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
