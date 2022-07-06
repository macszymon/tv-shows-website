import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Trending from '../../Components/TrendingHome/TrendingHome';
import ComingSoon from '../../Components/ComingSoonHome/ComingSoonHome';

function Home({shows}) {
  return (
    <main>
      <Hero />
      <Trending
        trendingShows={shows.filter(
          (item) => item.weight >= 100 && item.status === 'Running'
        )}
      />
      <ComingSoon
        comingShows={shows.filter(
          (item) => item.weight >= 99 && item.status === 'In Development'
        )}
      />
    </main>
  );
}

export default Home;
