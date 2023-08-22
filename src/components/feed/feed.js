import React from "react";
import "./feed.css";
import Post from "../post/Post";
export default function Feed() {
    const mockContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec enim tristique, mollis justo id, vehicula ex. Phasellus vel risus vitae lectus ultricies feugiat ac nec massa. Integer tincidunt nec leo ac condimentum. Fusce id cursus dui. Integer ac tellus id mi pretium commodo. Nullam nec ante posuere eros condimentum tincidunt vitae in justo. Nulla vel metus nec lectus volutpat maximus. Pellentesque fringilla lorem at molestie egestas. Etiam dapibus eleifend velit at sodales. Etiam vitae euismod arcu, ut cursus nibh. Suspendisse risus nisi, auctor eget dui id, auctor sagittis dui.';
    const posts = [
        {title: "This is a post", content: mockContent, user: 'user1', subreddit: 'r/redditSub', points: 599, comments: ["comment1", "comment2"], id: 1}, {title: "This is a post 2", content: mockContent, user: 'user2', subreddit: 'r/redditSub2', points: 3425, comments: ["comment1", "comment2"], id: 2}, {title: "This is a post3", content: mockContent, user: 'user1', subreddit: 'r/redditSub', points: 21442 , comments: ["comment1", "comment2"], id: 3}
    ]
    return (
        <div className="feed">
            {posts.map((post) => {
                return (
                    <Post post={post} />
                )
            })}
        </div>
    );
}