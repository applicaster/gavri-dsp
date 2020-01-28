export default function({ params }) {
  return {
    type: {
      value: "feed",
      title: "title"
    },
    entry: [
      {
        type: {
          value: "feed"
        },
        content: {
          src: `gavri-dsp://fetchData?type=search&q=${params.q}&component=1`
        }
      }
    ]
  };
}
