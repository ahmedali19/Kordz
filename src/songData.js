import { v4 as uuidv4 } from "uuid";

const songData = () => {
  return [
    {
      name: "Alibi",
      artist: "Distrion ft. Heleen",
      cover:
        "https://drive.google.com/uc?export=download&id=1eFjLXUCzxqBs6z2mBex3bJa02cEn-JA7",
      audio:
        "https://drive.google.com/uc?export=download&id=1Ot8BmuaGK-hcRf22rZ0Is2OU8VltyTBn",
      active: true,
      color: ["#262626", "#EC8194"],
      id: uuidv4(),
    },
    {
      name: "Dreams Pt. II",
      artist: "Lost Sky ft. Sara Skinner",
      cover:
        "https://drive.google.com/uc?export=download&id=1bVe287WAr-x5MavVvsRo-y0rVRvXetgb",
      audio:
        "https://drive.google.com/uc?export=download&id=1R30gxpMyltr10PPK-MrpFTfo0o5IHOjq",
      active: false,
      color: ["#DDC0D5", "#884037"],
      id: uuidv4(),
    },
    {
      name: "Fearless",
      artist: "TULE",
      cover:
        "https://drive.google.com/uc?export=download&id=1dAr37bah0WEUhDLUBavjkMCbyByRHKOb",
      audio:
        "https://drive.google.com/uc?export=download&id=1IY_-ZX_raX4GlVcFRGLt3jRLYPOojiod",
      active: false,
      color: ["#6B5C73", "#634744"],
      id: uuidv4(),
    },
    {
      name: "Heroes Tonight",
      artist: "Janji ft. Johnning",
      cover:
        "https://drive.google.com/uc?export=download&id=1llUO83Qpyct8OHKK46eXfnBiyhOpvOq4",
      audio:
        "https://drive.google.com/uc?export=download&id=1nD9xSAno9p1dfQEmZdfir9HeNjnG993L",
      active: false,
      color: ["#F8F944", "#3E2842"],
      id: uuidv4(),
    },
    {
      name: "Invincible",
      artist: "DEAF KEV",
      cover:
        "https://drive.google.com/uc?export=download&id=1o54JlplFjzimgPMGJqLoxjhqM_fMaG7H",
      audio:
        "https://drive.google.com/uc?export=download&id=1OAL2NncDhHwwhnQIiTNOXJhQtPmfIFvU",
      active: false,
      color: ["#A77177", "#463959"],
      id: uuidv4(),
    },
    {
      name: "Light It Up",
      artist: "Robin Hustin x TobiMorrow",
      cover:
        "https://drive.google.com/uc?export=download&id=1_pKlaYrE0GVN8AQ2V59mcEryeUeq9vWf",
      audio:
        "https://drive.google.com/uc?export=download&id=1VtbgEDKjZNDSGGZKqgq9L9fk1gwy8gBT",
      active: false,
      color: ["#3F3E4F", "#10243F"],
      id: uuidv4(),
    },
    {
      name: "On & On",
      artist: "Cartoon ft. Daniel Levi",
      cover:
        "https://drive.google.com/uc?export=download&id=15GnRmp3jUdrbQOINVXolmfZ9aij4R02S",
      audio:
        "https://drive.google.com/uc?export=download&id=1SwiERgFyE64RL3JjbxfR4yzQIGWwWKLn",
      active: false,
      color: ["#F26E3B", "#5D637D"],
      id: uuidv4(),
    },
    {
      name: "Perfect 10",
      artist: "Unknown Brain ft. Heather",
      cover:
        "https://drive.google.com/uc?export=download&id=1rESFTT0B4wZK3xAotSe68RscoB_tOztX",
      audio:
        "https://drive.google.com/uc?export=download&id=1pfjTfEcQaW8cyuOnmLD0F9lVZypwccPz",
      active: false,
      color: ["#D890EC", "#262D4A"],
      id: uuidv4(),
    },
  ];
};

export default songData;
