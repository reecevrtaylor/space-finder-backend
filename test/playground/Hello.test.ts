import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Update'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: 'dd5bd6b9-5b13-41c7-a4c8-9d1355ababab'
    },
    body: {
        location: 'New Location'
    }
} as any;


const result = handler(event, {} as any).then((apiResult) => {
    const items = JSON.parse(apiResult.body);
    console.log(123)
});