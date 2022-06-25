import { compile } from 'json-schema-to-typescript';

it('compiles', async () => {
  const result = await compile({
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'QueryMsg',
    type: 'string',
    enum: []
  });
  console.log(result);
});
