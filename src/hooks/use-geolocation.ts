'use client';

import { useState, useEffect } from 'react';

type Geolocation = {
  countryCode: string | null;
  loading: boolean;
};

const ALLOWED_COUNTRIES = ['US', 'GB', 'AE', 'IN'];

export function useGeolocation(): Geolocation {
  const [location, setLocation] = useState<Geolocation>({
    countryCode: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchLocation() {
      try {
        // Switched to a different geolocation API which might be more reliable or less likely to be blocked.
        const response = await fetch('https://ipinfo.io/country');
        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }
        const countryCode = await response.text();
        setLocation({
          // Trim whitespace from the response and check if it's in the allowed list
          countryCode: ALLOWED_COUNTRIES.includes(countryCode.trim()) ? countryCode.trim() : 'IN',
          loading: false,
        });
      } catch (error) {
        console.error('Geolocation fetch error:', error);
        // Default to India on error
        setLocation({ countryCode: 'IN', loading: false });
      }
    }

    fetchLocation();
  }, []);

  return location;
}
