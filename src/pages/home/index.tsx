import React from 'react';

import Layout from '@/components/Layout';
import BannerSection from '@/pages/home/sections/bannerSection';
import Slogan from '@/pages/home/sections/sloganSection';
import AnalyticsSection from '@/pages/home/sections/analyticsSection';
import SolutionsSection from '@/pages/home/sections/solutionsSection';
import SuccessSection from '@/pages/home/sections/successSection';
import BenefitsSection from '@/pages/home/sections/benefitsSection';
import TestimonialsSection from '@/pages/home/sections/testimonialsSection';
import PricingSection from '@/pages/home/sections/pricingBlocks';
import BlogSection from '@/pages/home/sections/blogSection';
import HelpSection from '@/pages/home/sections/helpSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <Layout>
      <Slogan />
      <BannerSection />
      <AnalyticsSection />
      <SolutionsSection />
      <SuccessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <HelpSection />
      <Footer />
    </Layout>
  );
};

export default Home;
