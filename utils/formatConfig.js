const formatConfig = {
  instagram: {
    post: { width: 1080, height: 1080, fit: "cover" },
    story: { width: 1080, height: 1920, fit: "cover" },
    profile: { width: 320, height: 320, fit: "contain" },
    square: { width: 1080, height: 1080, fit: "cover" },
    portrait: { width: 1080, height: 1350, fit: "cover" },
  },
  facebook: {
    post: { width: 1200, height: 630, fit: "cover" },
    story: { width: 1080, height: 1920, fit: "cover" },
    profile: { width: 170, height: 170, fit: "contain" },
    cover: { width: 851, height: 315, fit: "contain" },
    landscape: { width: 1200, height: 630, fit: "cover" },
    portrait: { width: 630, height: 1200, fit: "cover" },
  },
  twitter: {
    post: { width: 1600, height: 900, fit: "cover" },
    profile: { width: 400, height: 400, fit: "contain" },
    cover: { width: 1500, height: 500, fit: "contain" },
    landscape: { width: 1600, height: 900, fit: "cover" },
    portrait: { width: 1080, height: 1350, fit: "cover" },
  },
  tiktok: {
    post: { width: 1080, height: 1920, fit: "cover" },
    story: { width: 1080, height: 1920, fit: "cover" },
    profile: { width: 200, height: 200, fit: "contain" },
  },
  youtube: {
    profile: { width: 800, height: 800, fit: "contain" },
    cover: { width: 2560, height: 1440, fit: "cover" },
    thumbnail: { width: 1280, height: 720, fit: "cover" },
    mobile_cover: { width: 1235, height: 338, fit: "cover" },
  },
};

function getFormatConfig(platform, format) {
  return formatConfig[platform]?.[format];
}

module.exports = { getFormatConfig };
