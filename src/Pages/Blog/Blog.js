import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src="https://miro.medium.com/max/1400/1*Z5SpsmDvk67BIImwHvh_cQ.png"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Difference between SQL and NoSQL?
              </h3>
              <span className="text-xs dark:text-gray-400">
                {new Date().toDateString()}
              </span>
              <p>
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  What is JWT?
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {new Date().toDateString()}
                </span>
                <p>
                  JSON Web Token (JWT) is an open standard (RFC 7519) that
                  defines a compact and self-contained way for securely
                  transmitting information between parties as a JSON object.
                  This information can be verified and trusted because it is
                  digitally signed. JWTs can be signed using a secret (with the
                  HMAC algorithm) or a public/private key pair using RSA or
                  ECDSA
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://www.partech.nl/-/media/habitat/images/blog/authentication-using-json-web-tokens-in-net-core/how-does-jwt-work.ashx?mw=900&hash=F97576EA7092091B6A30C44DC5681185"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  How does JWT work?
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {new Date().toDateString()}
                </span>
                <p>
                  Basically the identity provider(IdP) generates a JWT
                  certifying user identity and Resource server decodes and
                  verifies the authenticity of the token using secret salt /
                  public key
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  What is the difference between javascript and Node JS?
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {new Date().toDateString()}
                </span>
                <p>
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://forum.golibrary.co/wp-content/uploads/2020/04/nodejs.png"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  How does NodeJS handle multiple requests at the same time?
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {new Date().toDateString()}
                </span>
                <p>
                  How NodeJS handle multiple client requests? NodeJS receives
                  multiple client requests and places them into EventQueue.
                  NodeJS is built with the concept of event-driven architecture.
                  NodeJS has its own EventLoop which is an infinite loop that
                  receives requests and processes them.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://www.partech.nl/-/media/habitat/images/blog/authentication-using-json-web-tokens-in-net-core/how-does-jwt-work.ashx?mw=900&hash=F97576EA7092091B6A30C44DC5681185"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {new Date().toDateString()}
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687489/retina_800x320_cover-0801_SONWebTokenTutorialAnExampleinLaravelandAngularJS_Razvan_Newsletter-a059e94497ffd6d077fee09ef992526b.png"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {new Date().toDateString()}
                </span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
