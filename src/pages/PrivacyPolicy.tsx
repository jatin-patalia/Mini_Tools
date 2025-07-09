const PrivacyPolicy = () => {
  const updatedDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-teal-600">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500">Last updated: {updatedDate}</p>

      <p className="mb-4">
        At <strong>Mini Tools Hub</strong> (accessible at{" "}
        <a href="https://minitoolshub.com" className="text-blue-600 underline">
          https://minitoolshub.com
        </a>
        ), your privacy is important to us...
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Personal Information:</strong> Name and email submitted
          through the contact form.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> IP, browser type, pages
          visited, etc.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the information to respond to messages, improve the site, and
        serve relevant ads via Google AdSense.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        3. Google AdSense
      </h2>
      <p className="mb-4">
        Google may use cookies to serve personalized ads. You can opt out at{" "}
        <a
          href="https://www.google.com/settings/ads"
          className="text-blue-600 underline"
        >
          Google Ads Settings
        </a>
        . Learn more:{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          className="text-blue-600 underline"
        >
          Google Policies
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        4. Cookies
      </h2>
      <p className="mb-4">
        We may use cookies for analytics and ad personalization. You can disable
        them via browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        5. Third-Party Links
      </h2>
      <p className="mb-4">
        We are not responsible for the privacy policies of external sites linked
        on our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        6. Data Security
      </h2>
      <p className="mb-4">
        We implement reasonable security practices but cannot guarantee 100%
        safety over the internet.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        7. Your Rights
      </h2>
      <p className="mb-4">
        You can request to access or delete your data by contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        8. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this policy. Revisions will be posted here with an updated
        effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-teal-700">
        9. Contact Us
      </h2>
      <p className="mb-4">
        If you have any questions, email us at{" "}
        <span className="text-blue-600">[your email]</span>.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
