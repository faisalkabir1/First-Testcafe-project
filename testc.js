import { Selector } from 'testcafe'

fixture`Getting Started`
    .page`http://zero.webappsecurity.com/`

test('User can search for a product', async t => {
    const searchInput = Selector('#searchTerm');

    const resultTitle = Selector('.result-title');

    await t
        .typeText(searchInput, 'online bank');
        .pressKey('enter');
        .expect(resultTitle.innerText).contains('online bank');
})
test('Valid Login test', async t => {

});