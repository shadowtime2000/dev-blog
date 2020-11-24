module.exports = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "",
          },
        ],
      },
      {
        source: "/post/:id",
        headers: [
          {
            key: "X-Robots-Tag",
            value: ""
          }
        ]
      }
    ];
  },
};
