document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-2c768148c4d27cab10fe818942078e18.css">')
document.write('<div id=\"gist37447383\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-inventoryform-php\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-php \">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-inventoryform-php-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-inventoryform-php-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-pse\">&lt;?php<\/span><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-inventoryform-php-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-inventoryform-php-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-inventoryform-php-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-k\">namespace<\/span> <span class=\"pl-en\">Drupal\\manage_inventory\\Form<\/span>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-inventoryform-php-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-inventoryform-php-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-k\">use<\/span> <span class=\"pl-c1\">Drupal\\Core\\Entity\\ContentEntityForm<\/span>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-inventoryform-php-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-k\">use<\/span> <span class=\"pl-c1\">Drupal\\Core\\Language\\Language<\/span>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-inventoryform-php-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-k\">use<\/span> <span class=\"pl-c1\">Drupal\\Core\\Form\\FormStateInterface<\/span>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-inventoryform-php-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-inventoryform-php-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\"><span class=\"pl-c\">/**<\/span><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-inventoryform-php-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\"> * Form controller for the manage_inventory entity edit forms.<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-inventoryform-php-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\"> *<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-inventoryform-php-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\"> * @ingroup manage_inventory<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-inventoryform-php-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\"> <span class=\"pl-c\">*/<\/span><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-inventoryform-php-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-k\">class<\/span> <span class=\"pl-en\">InventoryForm<\/span> <span class=\"pl-k\">extends<\/span> <span class=\"pl-e\">ContentEntityForm<\/span> {<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-inventoryform-php-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-inventoryform-php-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">  <span class=\"pl-c\"><span class=\"pl-c\">/**<\/span><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-inventoryform-php-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\">   * {@inheritdoc}<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-inventoryform-php-LC19\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\">   <span class=\"pl-c\">*/<\/span><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-inventoryform-php-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">  <span class=\"pl-k\">public<\/span> <span class=\"pl-k\">function<\/span> <span class=\"pl-en\">buildForm<\/span>(<span class=\"pl-k\">array<\/span> <span class=\"pl-smi\">$form<\/span>, <span class=\"pl-c1\">FormStateInterface<\/span> <span class=\"pl-smi\">$form_state<\/span>) {<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-inventoryform-php-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-c\"><span class=\"pl-c\">/*<\/span> @var $entity \\Drupal\\manage_inventory\\Entity\\Inventory <span class=\"pl-c\">*/<\/span><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-inventoryform-php-LC22\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-smi\">$form<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">parent<\/span><span class=\"pl-k\">::<\/span>buildForm(<span class=\"pl-smi\">$form<\/span>, <span class=\"pl-smi\">$form_state<\/span>);<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-inventoryform-php-LC23\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-smi\">$entity<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">$this<\/span><span class=\"pl-k\">-&gt;<\/span><span class=\"pl-smi\">entity<\/span>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-inventoryform-php-LC24\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-inventoryform-php-LC25\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-smi\">$form<\/span>[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>langcode<span class=\"pl-pds\">&#39;<\/span><\/span>] <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">array<\/span>(<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-inventoryform-php-LC26\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">      <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>#title<span class=\"pl-pds\">&#39;<\/span><\/span> <span class=\"pl-k\">=&gt;<\/span> <span class=\"pl-smi\">$this<\/span><span class=\"pl-k\">-&gt;<\/span>t(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Language<span class=\"pl-pds\">&#39;<\/span><\/span>),<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-inventoryform-php-LC27\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">      <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>#type<span class=\"pl-pds\">&#39;<\/span><\/span> <span class=\"pl-k\">=&gt;<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>language_select<span class=\"pl-pds\">&#39;<\/span><\/span>,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-inventoryform-php-LC28\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">      <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>#default_value<span class=\"pl-pds\">&#39;<\/span><\/span> <span class=\"pl-k\">=&gt;<\/span> <span class=\"pl-smi\">$entity<\/span><span class=\"pl-k\">-&gt;<\/span>getUntranslated()<span class=\"pl-k\">-&gt;<\/span>language()<span class=\"pl-k\">-&gt;<\/span>getId(),<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-inventoryform-php-LC29\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">      <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>#languages<span class=\"pl-pds\">&#39;<\/span><\/span> <span class=\"pl-k\">=&gt;<\/span> <span class=\"pl-c1\">Language<\/span><span class=\"pl-k\">::<\/span><span class=\"pl-c1\">STATE_ALL<\/span>,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-inventoryform-php-LC30\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    );<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-inventoryform-php-LC31\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-k\">return<\/span> <span class=\"pl-smi\">$form<\/span>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-inventoryform-php-LC32\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">  }<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-inventoryform-php-LC33\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-inventoryform-php-LC34\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">  <span class=\"pl-c\"><span class=\"pl-c\">/**<\/span><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-inventoryform-php-LC35\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\">   * {@inheritdoc}<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-inventoryform-php-LC36\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><span class=\"pl-c\">   <span class=\"pl-c\">*/<\/span><\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-inventoryform-php-LC37\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">  <span class=\"pl-k\">public<\/span> <span class=\"pl-k\">function<\/span> <span class=\"pl-en\">save<\/span>(<span class=\"pl-k\">array<\/span> <span class=\"pl-smi\">$form<\/span>, <span class=\"pl-c1\">FormStateInterface<\/span> <span class=\"pl-smi\">$form_state<\/span>) {<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-inventoryform-php-LC38\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-smi\">$form_state<\/span><span class=\"pl-k\">-&gt;<\/span>setRedirect(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>entity.content_entity_manage_inventory.collection<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-inventoryform-php-LC39\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-smi\">$entity<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">$this<\/span><span class=\"pl-k\">-&gt;<\/span>getEntity();<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-inventoryform-php-LC40\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">    <span class=\"pl-smi\">$entity<\/span><span class=\"pl-k\">-&gt;<\/span>save();<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-inventoryform-php-LC41\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">  }<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-inventoryform-php-LC42\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\">}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-inventoryform-php-LC43\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-inventoryform-php-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-inventoryform-php-LC44\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s1\"><\/span><span class=\"pl-pse\"><span class=\"pl-s1\">?<\/span>&gt;<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/adityaanurag/06b2c48c3a7a408400658279c758d4c3/raw/5b2af80d446a018601d7b5137d60128e649331a2/InventoryForm.php\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/adityaanurag/06b2c48c3a7a408400658279c758d4c3#file-inventoryform-php\">InventoryForm.php<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
