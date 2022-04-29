const docusign = require("docusign-esign");



async function listEnvelopes() {
  let dsApiClient = new docusign.ApiClient();
  dsApiClient.setBasePath("https://demo.docusign.net/restapi/");
  dsApiClient.addDefaultHeader(
    "Authorization",
    "Bearer " +
      "eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwCA3nYB6inaSAgAgB6aDy0q2kgCAIFsk6p513dHkN4M1e0dSsAVAAEAAAAYAAEAAAAFAAAADQAkAAAAMWY0ZDhjYWEtMGIxNC00ZWNhLThkZjItMTdiZWUyZmQwOTI2IgAkAAAAMWY0ZDhjYWEtMGIxNC00ZWNhLThkZjItMTdiZWUyZmQwOTI2MACAcfqz6SnaSDcAha2GJRkoIEGaJ6b9bq6DVA.Kehd4_zBliuOSdftXzl8NtHX0leMrbnhi3hVCpv2-sRezshrOYsNazizF8c9ZQXHtqs6G-XAMVqJs4c098MdpXWZF4gR1dF7JYtH0PrjkpneZ3Msm5O6rzoc6GIMOA-OzUtqHMVxc1obaM2iEdDydzi37GkNil0MuVbNNZgqTOckWlQbTn0kW1fxa_uWq_gOFrqHGqPxlJRuPeSJ2bgaI18NPZizDWE3zdAuBfD_tamXYLzEWcjyaLtbD2pyNIiF6wOySBbQ7bVEbAM5QyFxZRsBXEMfLPR3pD8PWD6gBEBlNljs12kvMqg_qIUzNa67o5po5ttBiQ0LMrB-O_XB-w"
  );

  let envelopesApi = new docusign.EnvelopesApi(dsApiClient);
  let results = await envelopesApi.listDocuments(
    "7e1b7492-5a6c-4d24-bce2-1e679cc28e27",
    "20600305-1642-48ad-b254-ade082b13677",
    null
  );

  return results;
}

module.exports = {
  listEnvelopes,
};
