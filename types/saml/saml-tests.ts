import { KeyInfoProvider, Saml11, Saml20, SamlAttributes, SamlSignedOpts, SamlUnassignedOpts } from "saml";

Saml11.create({
    cert: Buffer.from("certificate"),
    key: Buffer.from("key"),
});

Saml11.create(
    {
        cert: Buffer.from("certificate"),
        key: Buffer.from("key"),
        issuer: "urn:issuer",
        lifetimeInSeconds: 600,
        audiences: "urn:myapp",
        attributes: {
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": "foo@bar.com",
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": "Foo Bar",
            "groups": ["Group1", "Group2"],
        },
        nameIdentifier: "foo",
        sessionIndex: "_faed468a-15a0-4668-aed6-3d9c478cc8fa",
    },
    () => {},
);

Saml11.createUnsignedAssertion({}, () => {});

Saml11.createUnsignedAssertion(
    {
        cert: Buffer.from("certificate"),
        key: Buffer.from("key"),
        issuer: "urn:issuer",
        lifetimeInSeconds: 600,
        audiences: "urn:myapp",
        attributes: {
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": "foo@bar.com",
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": "Foo Bar",
            "groups": ["Group1", "Group2"],
        },
        nameIdentifier: "foo",
        sessionIndex: "_faed468a-15a0-4668-aed6-3d9c478cc8fa",
    },
    () => {},
);

Saml20.create({
    cert: Buffer.from("certificate"),
    key: Buffer.from("key"),
});

Saml20.create(
    {
        cert: Buffer.from("certificate"),
        key: Buffer.from("key"),
        issuer: "urn:issuer",
        lifetimeInSeconds: 600,
        audiences: "urn:myapp",
        attributes: {
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": "foo@bar.com",
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": "Foo Bar",
            "groups": ["Group1", "Group2"],
        },
        nameIdentifier: "foo",
        sessionIndex: "_faed468a-15a0-4668-aed6-3d9c478cc8fa",
    },
    () => {},
);

Saml20.createUnsignedAssertion({}, () => {});

Saml20.createUnsignedAssertion(
    {
        cert: Buffer.from("certificate"),
        key: Buffer.from("key"),
        issuer: "urn:issuer",
        lifetimeInSeconds: 600,
        audiences: "urn:myapp",
        attributes: {
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": "foo@bar.com",
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": "Foo Bar",
            "groups": ["Group1", "Group2"],
        },
        nameIdentifier: "foo",
        sessionIndex: "_faed468a-15a0-4668-aed6-3d9c478cc8fa",
    },
    () => {},
);
