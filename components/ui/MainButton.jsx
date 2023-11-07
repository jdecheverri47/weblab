function MainButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-xl text-white font-medium bg-[#D940C0] py-2 px-6 w-[11rem] h-[3rem] rounded-sm"
    >
      Start now!
    </button>
  );
}

export default MainButton;
