document.addEventListener("DOMContentLoaded", function () {
    function faqsAccordion() {
        var accordionSections = document.querySelectorAll(".accordion-item");

        if (accordionSections.length > 0) {
            var firstAccordionItemHeader = accordionSections[0].querySelector(
                ".accordion-item-header"
            );
            var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

            if (firstAccordionItemBody) {
                firstAccordionItemHeader.classList.add("active");
                firstAccordionItemBody.style.maxHeight =
                    firstAccordionItemBody.scrollHeight + "px";
            }

            for (let i = 1; i < accordionSections.length; i++) {
                var otherHeader = accordionSections[i].querySelector(".accordion-item-header");
                var otherBody = otherHeader.nextElementSibling;

                if (otherBody) {
                    otherHeader.classList.remove("active");
                    otherBody.style.maxHeight = "0";
                }
            }
        }

        accordionSections.forEach((section) => {
            var accordionItemHeaders = section.querySelector(".accordion-item-header");
            var accordionItemBody = section.querySelector(".accordion-item-body");

            accordionItemHeaders.addEventListener("click", function () {
                var currentlyActiveHeader = document.querySelector(
                    ".accordion-item-header.active"
                );
                var currentlyActiveBody = currentlyActiveHeader
                    ? currentlyActiveHeader.nextElementSibling
                    : null;

                if (currentlyActiveHeader && currentlyActiveBody) {
                    currentlyActiveHeader.classList.remove("active");
                    currentlyActiveBody.style.maxHeight = 0;
                }

                if (accordionItemHeaders !== currentlyActiveHeader) {
                    accordionItemHeaders.classList.add("active");
                    accordionItemBody.style.maxHeight =
                        accordionItemBody.scrollHeight + "px";
                } else {
                    accordionItemHeaders.classList.remove("active");
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });
    }

    faqsAccordion();
});


{
    document.addEventListener("DOMContentLoaded", function () {
        const MultipleSlider = () => {
            const MultipleSliders = document.querySelectorAll(".whyChooseLuckyFourSlider");

            MultipleSliders.forEach((slider) => {
                const wrapper = slider.parentElement;
                const prevArrow = wrapper.querySelector(".prev");
                const nextArrow = wrapper.querySelector(".next");
                const paginationEl = wrapper.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    direction: "horizontal",
                    speed: 1000,

                    navigation: {
                        nextEl: nextArrow,
                        prevEl: prevArrow,
                    },

                    pagination: {
                        el: paginationEl,
                        clickable: true,
                    },

                    breakpoints: {
                        150: {
                            slidesPerView: 1.3,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 2.1,
                            spaceBetween: 20,
                        },
                        769: {
                            slidesPerView: 2.7,
                            spaceBetween: 20,
                        },
                        1025: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        1150: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    },
                });
            });
        };

        MultipleSlider();
    });
}

{
    document.addEventListener("DOMContentLoaded", function () {
        const MultipleSlider = () => {
            const MultipleSliders = document.querySelectorAll(".CustomerRvirewssLIDER");

            MultipleSliders.forEach((slider) => {
                const wrapper = slider.parentElement;
                const prevArrow = wrapper.querySelector(".prev");
                const nextArrow = wrapper.querySelector(".next");
                const paginationEl = wrapper.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    direction: "horizontal",
                    speed: 1000,

                    navigation: {
                        nextEl: nextArrow,
                        prevEl: prevArrow,
                    },

                    pagination: {
                        el: paginationEl,
                        clickable: true,
                    },

                    breakpoints: {
                        150: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        769: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1025: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1150: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    },
                });
            });
        };

        MultipleSlider();
    });
}