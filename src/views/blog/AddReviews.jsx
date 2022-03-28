import React, { useState } from "react";
const AddReviews = () => {
const [review, setReview] = useState({
    comment:'',
    rate:1
})
    return(<div className="d-flex flex-column p-5 bg-secondary h-100">
        <h3>Leave your review</h3>
        <label for='comment'>Comment</label>
        <textarea id="comment" />
        <label for='rate'>Rate the post</label>
        <div className="d-flex justify-content-between align-items-center">
        <label for='rate'>1</label>
        <input type="radio" name="rate" onSelect={(e) => {setReview({...review, rate:1})}}/>
        <label for='rate'>2</label>
        <input type="radio" name="rate"onSelect={(e) => {setReview({...review, rate:2})}}/>
        <label for='rate'>3</label>
        <input type="radio" name="rate" onSelect={(e) => {setReview({...review, rate:3})}}/>
        <label for='rate'>4</label>
        <input type="radio" name="rate" onSelect={(e) => {setReview({...review, rate:4})}}/>
        <label for='rate'>5</label>
        <input type="radio" name="rate" onSelect={(e) => {setReview({...review, rate:5})}}/>
        </div>
        <div className="d-flex justify-content-center mt-4">
        <button type='button' className='btn btn-outline-light'>Cancel</button>
        <button type='button' className='btn btn-outline-light mx-2 '>Reset</button>
        <button type='button' className='btn btn-outline-light'>Submit</button>
        </div>

    </div>)
}

export default AddReviews 