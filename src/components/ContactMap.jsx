const ContactMap = () => {
  return (
    <section className="px-6 lg:px-12 pb-20">
      <div className="rounded-3xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.75982423426!2d-0.26213163536837897!3d5.591202954244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1779043646765!5m2!1sen!2sgh"
          title="Our location on Google Maps"
          className="w-full h-112.5 lg:h-125 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactMap;