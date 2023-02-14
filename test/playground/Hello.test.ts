import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Delete'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: 'b683a272-9f37-4fb0-bdf4-20145d2f20a4'
    }
} as any;


const result = handler(event, {} as any).then((apiResult) => {
    const items = JSON.parse(apiResult.body);
    console.log(123)
});