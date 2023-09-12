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
    </main>
  );
}

export default Home;
