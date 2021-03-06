module.exports = {
  mode: "jit",
  purge: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        indigo_600_7f: "#384aab7f",
        bluegray_50: "#ededf2",
        black_900_1a: "#0000001a",
        red_200: "#e39c9c",
        indigo_900_90: "#00217a90",
        indigo_A200: "#4f61ff",
        indigo_A200_29: "#4f61ff29",
        gray_50: "#fffafa",
        white_A700_75: "#ffffff75",
        black_900: "#000000",
        red_A700_90: "#ff000090",
        red_A700: "#ff0000",
        white_A700_4c: "#ffffff4c",
        gray_600: "#828282",
        gray_700: "#666666",
        bluegray_300_99: "#a3a6b399",
        gray_400: "#c4c4c4",
        pink_50: "#fcdeed",
        gray_301: "#e6e6e6",
        gray_401: "#bdbdbd",
        gray_800: "#363840",
        indigo_50: "#dee3ff",
        gray_900: "#141414",
        indigo_51: "#e6e8fa",
        bluegray_100: "#c7c7d1",
        gray_101: "#f5f7fa",
        gray_300: "#dee0eb",
        gray_102: "#f2f5fc",
        gray_100: "#f2f5ff",
        bluegray_900: "#2b2b42",
        indigo_A200_e5: "#697affe5",
        bluegray_301: "#9ea3b5",
        bluegray_400: "#82859c",
        bluegray_300: "#a3a6b3",
        bluegray_101: "#d1d1d1",
        white_A701: "#fffcfc",
        bluegray_904: "#26263d",
        white_A700: "#ffffff",
        bluegray_903: "#26263b",
        indigo_800: "#17338f",
        bluegray_902: "#262633",
        bluegray_901: "#333333",
        indigo_600: "#384aab",
      },
      fontFamily: {
        roboto: "Roboto",
        nunito: "Nunito",
        montserrat: "Montserrat",
        abeezee: "ABeeZee",
        mulish: "Mulish",
        opensans: "Open Sans",
      },
      fontSize: {
        fs7: "7px",
        fs8: "8px",
        fs9: "9px",
        fs10: "10px",
        fs11: "11px",
        fs12: "12px",
        fs13: "13px",
        fs14: "14px",
        fs15: "15px",
        fs16: "16px",
        fs17: "17px",
        fs18: "18px",
        fs19: "19px",
        fs20: "20px",
        fs21: "21px",
        fs22: "22px",
        fs24: "24px",
        fs28: "28px",
        fs31: "31px",
        fs35: "35px",
        fs37: "37px",
        fs40: "40px",
        fs42: "42px",
        fs46: "46px",
        fs48: "48px",
        fs49: "49px",
        fs53: "53px",
        fs56: "56px",
        fs57: "57px",
        fs60: "60px",
        fs64: "64px",
        fs72: "72px",
        fs76: "76px",
        fs86: "86px",
      },
      letterSpacing: {
        ls1: "1px",
        ls11: "-1px",
        ls2: "-2px",
        ls08899999856948853: "-0.8899999856948853px",
      },
      borderRadius: {
        radius4: "4px",
        radius8: "8px",
        radius12: "12px",
        radius24: "24px",
        radius30: "30px",
        radius40: "40px",
        radius50: "50px",
        radius501: "50%",
        radius182: "182px",
      },
      boxShadow: {
        bs2: "0px 0px  1px 0px #17338f",
        bs1: "0px 8px  20px 0px #4f61ff29",
        bs: "0px 4px  14px 0px #0000001a",
      },
      opacity: { op6: 0.06, op61: 0.6, op7: 0.7, op8: 0.8, op81: 0.08 },
      lineHeight: {
        lh: "normal",
        lh15: "15px",
        lh17: "17px",
        lh20: "20px",
        lh24: "24px",
        lh28: "28px",
        lh32: "32px",
        lh38: "38px",
        lh54: "54px",
        lh62: "62px",
        lh70: "70px",
        lh84: "84px",
        lh2000: "20.00px",
        lh3200: "32.00px",
        lh7000: "70.00px",
      },
      borderWidth: { bw: "none", bw6: "6px", bw15: "1.5px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
