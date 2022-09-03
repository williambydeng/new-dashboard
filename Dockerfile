FROM sail-8.1/app
RUN apt-get -y update
RUN groupadd -r user && useradd -r -g user user
USER user