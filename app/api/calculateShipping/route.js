import { NextResponse } from 'next/server';

export async function POST(req) {
  const { originZip, destinationZip, weight, height, width, length } = await req.json();

  console.log('Received data:', { originZip, destinationZip, weight, height, width, length });

  if (!originZip || !destinationZip || !weight || !height || !width || !length) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Dummy response for shipping cost
    const dummyRate = 1465; // Fixed shipping cost in cents ($14.65)

    return NextResponse.json({ rate: dummyRate });
  } catch (error) {
    console.error("Error calculating shipping:", error);
    return NextResponse.json({ error: "Failed to calculate shipping cost" }, { status: 500 });
  }
}

{/** LIVE USPS VERSION
  

  import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import xml2js from 'xml2js';

const uspsUrl = process.env.USPS_SERVER_URL || 'https://secure.shippingapis.com/ShippingAPI.dll';
const userId = process.env.USPS_USER_ID;
const password = process.env.USPS_PASSWORD;

export async function POST(req) {
  const { originZip, destinationZip, weight, height, width, length } = await req.json();

  console.log('Received data:', { originZip, destinationZip, weight, height, width, length });

  if (!originZip || !destinationZip || !weight || !height || !width || !length) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const uspsRequest = `
    <RateV4Request USERID="${userId}" PASSWORD="${password}">
      <Revision>2</Revision>
      <Package ID="1ST">
        <Service>PRIORITY</Service>
        <ZipOrigination>${originZip}</ZipOrigination>
        <ZipDestination>${destinationZip}</ZipDestination>
        <Pounds>${Math.floor(weight / 16)}</Pounds>
        <Ounces>${weight % 16}</Ounces>
        <Container></Container>
        <Width>${width}</Width>
        <Length>${length}</Length>
        <Height>${height}</Height>
        <Machinable>true</Machinable>
      </Package>
    </RateV4Request>
  `;

  try {
    const response = await fetch(`${uspsUrl}?API=RateV4&XML=${encodeURIComponent(uspsRequest)}`, {
      method: 'GET'
    });

    const textResponse = await response.text();
    console.log('USPS response:', textResponse);

    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(textResponse);

    if (result.RateV4Response) {
      const rate = result.RateV4Response.Package[0].Postage[0].Rate[0];
      return NextResponse.json({ rate });
    } else {
      console.error('USPS API Error:', result);
      return NextResponse.json({ error: "Failed to calculate shipping cost" }, { status: 500 });
    }
  } catch (error) {
    console.error("USPS API Error:", error);
    return NextResponse.json({ error: "Failed to calculate shipping cost" }, { status: 500 });
  }
}

  
  
  */}