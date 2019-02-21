var posts = [
],
    comments = [],
    categories = [],
    users = [];

for (var i = 0; i < 10; i++) {
    var ele = i;
    posts.push(
        {
            foto: 'http://img.finedininglovers.com/?img=http%3A%2F%2Ffinedininglovers.cdn.crosscast-system.com%2FBlogPost%2FOriginal_1756_green-salad-pomegranate-seeds.jpg&w=1200&h=660&lu=1489538053&ext=.jpg',
            title: "post" + ele,
            body: "Suspendisse velit mauris, semper vitae enim ut, rhoncus dignissim mi. Vestibulum non orci sagittis, vulputate velit bibendum, efficitur augue. Integer nunc libero, rutrum eu tristique nec, gravida eget nunc. Aenean ac metus consectetur, rhoncus felis at, lobortis lorem. Pellentesque sodales, mi ",
            owner: ele,
            categoryID: ele + 100,
            _id: ele + 100
        }
    )
}
for (var i = 0; i < 10; i++) {
    var ele = i;
    comments.push(
        {
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar varius condimentum. Mauris mattis magna risus, sit amet lobortis magna aliquam at. Cras vitae metus eu turpis tristique faucibus sit amet vel odio. Quisque euismod neque quis urna aliquam, at mollis nunc imperdiet. Nam elementum lacinia libero quis condimentum. Suspendisse velit mauris, semper vitae enim ut, rhoncus dignissim mi. Vestibulum non orci sagittis, vulputate velit bibendum, efficitur augue. Integer nunc libero, rutrum eu tristique nec, gravida eget nunc. Aenean ac metus consectetur, rhoncus felis at, lobortis lorem. Pellentesque sodales, mi in ultricies porta, nisi eros porta nisl, id hendrerit est est eget mi. Nullam interdum, libero ut elementum dictum, neque nibh ornare urna, et malesuada leo mauris ut arcu.",
            owner: ele,
            postID: ele + 100,
            _id: ele + 100
        }
    )
}
for (var i = 0; i < 3; i++) {
    var ele = i;
    categories.push(
        {
            name: 'category' + ele,
            foto: 'http://img.finedininglovers.com/?img=http%3A%2F%2Ffinedininglovers.cdn.crosscast-system.com%2FBlogPost%2FOriginal_1756_green-salad-pomegranate-seeds.jpg&w=1200&h=660&lu=1489538053&ext=.jpg',
            _id: ele + 100
        }
    )
}
for (var i = 0; i < 10; i++) {
    var ele = i;
    users.push(
        {
            username: '',
            password: '',
            email: '',
            _id: ele + 100
        }
    )
}

module.exports = { posts, comments, categories, users };