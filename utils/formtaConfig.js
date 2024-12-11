const formatConfig = {
  instagram: {
    post: { width: 1080, height: 1080, fit: "contain" },
    story: { width: 1080, height: 1920, fit: "contain" },
    profile: { width: 320, height: 320, fit: "contain" },
  },
  facebook: {
    post: { width: 1200, height: 630, fit: "cover" },
    story: { width: 1080, height: 1920, fit: "contain" },
    profile: { width: 170, height: 170, fit: "contain" },
  },
  twitter: {
    post: { width: 1200, height: 675, fit: "contain" },
    profile: { width: 400, height: 400, fit: "contain" },
    cover: { width: 1500, height: 500, fit: "cover" },
  },
  tiktok: {
    post: { width: 1080, height: 1920, fit: "contain" },
    profile: { width: 200, height: 200, fit: "contain" },
    story: { width: 1080, height: 1920, fit: "contain" },
  },
};
function getFormatConfig(platform, format) {
  return formatConfig[platform]?.[format];
}

module.exports = { getFormatConfig };
