import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  ThemeProvider,
} from '@mui/material';
import myTheme from '../theme/myTheme';
import jatinImg from '../images/jatin.jpg';
import jahnaviImg from '../images/jahnavi.jpg';

const Team = () => {
  const targetRef = useRef(null);

  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    marginTop: 100,
  }));

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setSpring({ opacity: 1, marginTop: 0 });
    } else {
      setSpring({ opacity: 0, marginTop: 100 });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this threshold as needed
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetRef]);

  return (
    <ThemeProvider theme={myTheme}>
      <Container sx={{ pb: 10 }}>
        <animated.div ref={targetRef} style={spring}>
          <Typography variant="h2" sx={{ color: 'primary.main', m: 12 }}>
            OUR TEAM
          </Typography>
          <Grid container spacing={4}>
            {/* Team Member 1 */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={jahnaviImg}
                  alt="Team Member 1"
                />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    Jahnavi Lalwani
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Role: Developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Team Member 2 */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={jatinImg}
                  alt="Team Member 2"
                />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    Jatin Sharma
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Role: Developer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </animated.div>
      </Container>
    </ThemeProvider>
  );
};

export default Team;
