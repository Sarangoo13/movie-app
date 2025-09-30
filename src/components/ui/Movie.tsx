export function Movie({ rating, name, images }) {
  return (
    <div className="w-[230px] h-[439px] rounded-[8px] bg-[#F4F4F5]">
      <img src={images} height={85} />
      <div>
        <div className="rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M8.18913 1.33334L10.2491 5.50667L14.8558 6.18L11.5225 9.42667L12.3091 14.0133L8.18913 11.8467L4.06913 14.0133L4.85579 9.42667L1.52246 6.18L6.12913 5.50667L8.18913 1.33334Z"
              fill="#FDE047"
              stroke="#FDE047"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {""}
          {rating}
        </div>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}
