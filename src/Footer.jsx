import React from "react";

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="container mx-auto px-4 text-center">
                    <img
                              src="/footer-image.png"
                                        alt="JPP3D Footer"
                                                  className="mx-auto mb-4 w-full max-w-xl rounded-xl shadow-lg"
                                                          />
                                                                  <p className="text-sm">
                                                                            © {new Date().getFullYear()} JPP3D. Todos los derechos reservados.
                                                                                    </p>
                                                                                          </div>
                                                                                              </footer>
                                                                                                );
                                                                                                };

                                                                                                export default Footer;