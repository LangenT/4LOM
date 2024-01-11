export const matterSecurity: { [key: string]: object } = {
  securityDefinitions: {
    matter_sc: {
        scheme: "matter",
        flow: "client",
        scopes: ["user", "admin"],
    },
  },
  security: ["matter_sc"],
}