function ServiceCard(props) {
  return (
    <div
      className={`w-[25rem] h-[30rem] border-2 border-[#D940C0] rounded-lg background_${props.image} bg-cover bg-no-repeat bg-center`}
    >
      <div className="w-full h-full flex justify-center rounded-md background_card_cover">
        <div className="px-5 py-3 flex flex-col justify-end">
          <h1 className="font-bold text-lg">{props.title}</h1>
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
