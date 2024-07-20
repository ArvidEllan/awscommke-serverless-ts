import React from 'react';
import Layout from '../components/Layout';
import EventTimer from '../components/EventTimer';
import KeynoteSpeaker from '../components/KeynoteSpeaker';
import SpeakerCard from '../components/SpeakerCard';
import SponsorCard from '../components/SponsorCard';
import VolunteerCard from '../components/VolunteerCard';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to AWS Community Kenya</h1>
      <EventTimer />
      <KeynoteSpeaker />
      <section>
        <h2>Speakers</h2>
        <SpeakerCard />
        {/* Add more SpeakerCards as needed */}
      </section>
      <section>
        <h2>Sponsors</h2>
        <SponsorCard />
        {/* Add more SponsorCards as needed */}
      </section>
      <section>
        <h2>Volunteers</h2>
        <VolunteerCard />
        {/* Add more VolunteerCards as needed */}
      </section>
    </Layout>
  );
};

export default Home;