function ContactInfo({ Icon, children }) {
  return (
    <div className="flex flex-row items-center space-x-3">
      <Icon size={22} className="text-dark" />
      <p className="text-medium">{children}</p>
    </div>
  );
}

export default ContactInfo;
