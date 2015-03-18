$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has URL', function() {
            for (var e in allFeeds) {
                expect(allFeeds[e].url).toBeDefined();
                expect(allFeeds[e].url.length).not.toBe(0);
            }
            
         });
        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has names', function() {
            for (var e in allFeeds) {
                expect(allFeeds[e].name).toBeDefined();
                expect(allFeeds[e].name.length).not.toBe(0);
            }
         });
    });
    
    describe("The menu", function() {
        /* Test that ensures the menu element is
         * hidden by default. 
         */        
        it("should be hidden", function(){            
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          * This test has two functions: 
          */
        describe('when button is clicked', function(){
            beforeEach(function() {
                $('.menu-icon-link').trigger('click');
            });
            // When button is first clicked
            it('menu is displayed', function() {
                expect($('body').hasClass('menu-hidden')).toBeFalsy();
            });
            // When button is clicked again            
            it('menu hidden on next click', function() {
                expect($('body').hasClass('menu-hidden')).toBeTruthy();
            });
        });
    });

    describe('Initial Entries', function () {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.         
         */
        beforeEach(function(done) {
            loadFeed(0,done);
        }) ;
        it('has added entries', function(done) {
            expect($('.feed').children().length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        var entries;
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeAll(function(done) {
            entries = $('.feed a').children('.entry');
            loadFeed(2, done);
        });
        //After the loadFeed function runs, .feed has different entries
        it('should have new content', function(done) {
            expect($('.feed a').children('.entry')).not.toBe(entries);
            done();
        });        
        afterAll(function (done) {
            loadFeed(0,done);
        });
    });        
}());
