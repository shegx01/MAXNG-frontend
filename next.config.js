module.exports = {
  async redirects() {
    return [
      {
        source: "/planets",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/films",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
