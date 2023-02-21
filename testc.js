import { Selector } from 'testcafe'

fixture`Getting Started`
    .page`http://zero.webappsecurity.com/`

test('User can search for a product', async t => {
    const searchInput = Selector('#searchTerm');

    const resultTitle = Selector('.top_offset');

    await t
        .typeText(searchInput, 'online bank');
    await t.pressKey('enter');
    await t.expect(resultTitle.innerText).contains('online bank');
})
test('Valid Login test', async t => {

});