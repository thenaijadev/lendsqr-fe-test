const basePath: string = "images/sideMenuIcons/";
const statsIcons: string = "images/userStatsIcons/";
export const Customersdata: {
  heading: string;
  data: { icon: string; title: string }[];
} = {
  heading: "CUSTOMERS",
  data: [
    {
      icon: `${basePath}user-friends.png`,
      title: "Users",
    },
    {
      icon: `${basePath}users.png`,
      title: "Guarantors",
    },
    {
      icon: `${basePath}sack.png`,
      title: "Loans",
    },
    {
      icon: `${basePath}handshake-regular.png`,
      title: "Decision Models",
    },
    {
      icon: `${basePath}piggy-bank.png`,
      title: "Savings",
    },
    {
      icon: `${basePath}hand-money.png`,
      title: "Loan Requests",
    },
    {
      icon: `${basePath}user-check.png`,
      title: "Whitelist",
    },
    {
      icon: `${basePath}user-times.png`,
      title: "Karma",
    },
  ],
};

export const BusinessesData: {
  heading: string;
  data: { icon: string; title: string }[];
} = {
  heading: "BUSINESSES",
  data: [
    {
      icon: `${basePath}briefcase.png`,
      title: "Organization",
    },
    {
      icon: `${basePath}hand-money.png`,
      title: "Loan Producs",
    },
    {
      icon: `${basePath}money-house.png`,
      title: "Savings Products",
    },
    {
      icon: `${basePath}coins-solid 1.png`,
      title: "Fees and Charges",
    },
    {
      icon: `${basePath}icon.png`,
      title: "Transactions",
    },
    {
      icon: `${basePath}user-cog.png`,
      title: "Service Account",
    },
    {
      icon: `${basePath}scroll.png`,
      title: "Settlements",
    },
    {
      icon: `${basePath}chart-bar.png`,
      title: "Reports",
    },
  ],
};

export const SettingsData: {
  heading: string;
  data: { icon: string; title: string }[];
} = {
  heading: "SETTINGS",
  data: [
    {
      icon: `${basePath}sliders.png`,
      title: "Preferences",
    },
    {
      icon: `${basePath}badge-percent.png`,
      title: "Fees and Pricing",
    },
    {
      icon: `${basePath}clipboard-list.png`,
      title: "Audit Logs",
    },
  ],
};

export const UserStatsData: { icon: string; title: string; ammount: string }[] =
  [
    {
      icon: `${statsIcons}icon1.png`,
      title: "USERS",
      ammount: "2,453",
    },
    {
      icon: `${statsIcons}icon2.png`,
      title: "ACTIVE USERS",
      ammount: "2,453",
    },
    {
      icon: `${statsIcons}icon3.png`,
      title: "USERS WITH LOANS",
      ammount: "12,453",
    },
    {
      icon: `${statsIcons}icon4.png`,
      title: "USERS WITH SAVINGS",
      ammount: "102,2453",
    },
  ];
